import { FC } from "react";
import { cva } from 'class-variance-authority';

interface ParagraphProps { }

const paragraphVariants = cva()

const Paragraph: FC<ParagraphProps> = ({ }) => {
  return (
    <h2 className="text-gray-700 text-base">
      Hello
    </h2>
  )
}