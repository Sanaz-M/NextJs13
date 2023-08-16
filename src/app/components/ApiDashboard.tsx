import { formatDistance } from 'date-fns';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import ApiKeyOptions from './ApiKeyOptions';
import { Input } from '@/ui/Input';
import LargeHeading from '@/ui/LargeHeading';
import Paragraph from '@/ui/Paragraph';
import Table from '@/ui/Table';

interface ApiKey {
  id: string;
  key: string;
  enabled: boolean;
  userId: string;
}

interface ApiRequest {
  //... other properties
  timestamp: Date;
}

const ApiDashboard = async ({ }) => {
  const user = await getServerSession(authOptions)
  //The notFound function allows you to render the not-found file within a route segment 
  // as well as inject a <meta name="robots" content="noindex" /> tag.
  //Invoking the notFound() function throws a NEXT_NOT_FOUND error and terminates rendering of the route segment in which it was thrown.
  if (!user) return notFound()

  const apiKeys = await db.apiKey.findMany({
    where: { userId: user.user.id },
  })

  const activeApiKey = apiKeys.find((key: ApiKey) => key.enabled)

  if (!activeApiKey) return notFound()

  const userRequests = await db.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key: ApiKey) => key.id),
      },
    },
  })

  const serializableRequests = userRequests.map((req: ApiRequest) => ({
    ...req,  // Spread all properties of req
    timestamp: formatDistance(new Date(req.timestamp), new Date()),  // Overwrite the timestamp property with the formatted string
  }));


  return (
    <div className='container flex flex-col gap-6'>
      <LargeHeading>Welcome back, {user.user.name}</LargeHeading>
      <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center'>
        <Paragraph>Your API key:</Paragraph>
        {/* Use truncate to truncate overflowing text with an ellipsis ( … ) */}
        <Input className='w-fit truncate' readOnly value={activeApiKey.key} />
        <ApiKeyOptions apiKeyKey={activeApiKey.key} />
      </div>

      <Paragraph className='text-center md:text-left mt-4 -mb-4'>
        Your API history:
      </Paragraph>

      <Table userRequests={serializableRequests} />
    </div>
  )
}

export default ApiDashboard
