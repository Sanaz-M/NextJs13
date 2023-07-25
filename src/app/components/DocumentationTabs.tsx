'use client'

import { FC } from 'react';
//SimpleBar is meant to improve the experience of internal web page scrolling; such as a chat box or a small scrolling area.
import SimpleBar from 'simplebar-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/Tabs';
import Code from './ui/Code';

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
      <TabsList>
        <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
      </TabsList>
      <TabsContent value='nodejs'>
        <SimpleBar forceVisible='y'>
          <Code animated code="nodejs" language='javascript' show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value='python'>
        <SimpleBar forceVisible='y'>
          <Code animated code="python" language='python' show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  )
}

export default DocumentationTabs