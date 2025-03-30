"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight } from "lucide-react";

export default function BookLoading() {
  return (
    <div className="py-6">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span className="hover:text-blue-600">Home</span>
        <ChevronRight size={16} className="mx-2" />
        <Skeleton className="h-4 w-20" />
        <ChevronRight size={16} className="mx-2" />
        <Skeleton className="h-4 w-32" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Book Image Column */}
        <div className="md:col-span-4">
          <div className="sticky top-24 flex flex-col gap-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[3/4] bg-gray-100">
                <Skeleton className="h-full w-full" />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 flex-1" />
            </div>
          </div>
        </div>
        
        {/* Book Details Column */}
        <div className="md:col-span-8">
          <Skeleton className="h-8 w-3/4 mb-2" />
          
          {/* Author info skeleton */}
          <Skeleton className="h-5 w-1/3 mb-4" />
          
          {/* Ratings skeleton */}
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="h-4 w-28" />
          </div>
          
          {/* Price section skeleton */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-end gap-3 mb-2">
              <Skeleton className="h-7 w-20" />
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-24" />
            </div>
            
            <Skeleton className="h-4 w-40 mb-4" />
            
            <div className="flex gap-3">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
          
          {/* Book details info skeleton */}
          <div className="mb-8">
            <Skeleton className="h-6 w-32 mb-4" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-2 py-2 border-b border-gray-100">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Book description skeleton */}
          <div className="mb-8">
            <Skeleton className="h-6 w-24 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 