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
    <div className="flex flex-col items-start justify-center p-8 md:p-32 min-h-screen">
      <div className="flex flex-col space-y-8 max-w-lg w-full">
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
                 <header className="space-y-2">
                    <h1 className="text-lg md:text-md font-medium">Design</h1>
                    <h2 className="text-sm text-muted-foreground">Portfolio</h2>
                </header>
        </div>
      <div className="w-full px-6">
        <PortfolioGrid />
      </div>
    </div>
  );
}

export default Design;