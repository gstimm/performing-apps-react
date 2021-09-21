import React from "react";
import { ProjectItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map((product) => {
        return <ProjectItem product={product} />;
      })}
    </div>
  );
}
