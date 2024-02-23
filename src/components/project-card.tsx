import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  description?: string;
  stack: string[];
  link: string;
};

export function ProjectCard({
  title,
  description,
  stack,
  link,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>
          <Link href={link} target="_blank" className="hover:underline">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="grow">
        {description && (
          <CardDescription className="font-mono text-gray-500 dark:text-gray-400">
            {description}
          </CardDescription>
        )}
      </CardContent>
      <CardFooter className="flex-wrap justify-self-end">
        {stack.map((technology, index) => {
          return (
            <Badge
              key={index}
              className="me-1 mb-1 bg-gray-700 dark:bg-gray-100 hover:bg-gray-700 dark:hover:bg-gray-300"
            >
              {technology}
            </Badge>
          );
        })}
      </CardFooter>
    </Card>
  );
}
