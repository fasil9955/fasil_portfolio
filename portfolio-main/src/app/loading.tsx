// SkeletonLoader.tsx
import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className }) => {
  return (
    <div
      className={`bg-slate-500 animate-pulse rounded-lg shadow-lg ${className}`}
    ></div>
  );
};

export default SkeletonLoader;
