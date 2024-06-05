import React from 'react';
import PortfolioGrid from '../components/ui/PortfolioGrid';
import '../app/globals.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb" 

const Design: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-lg md:text-md font-medium mb-8">Portfolio</h1>
          <Breadcrumb>
            <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Back</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage>Design</BreadcrumbPage>
                    </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
      <div className="w-full px-6">
        <PortfolioGrid />
      </div>
    </div>
  );
}

export default Design;