import React from "react";

const ImageGallery = ({ fileNames }: { fileNames: string[] }) => {
  const categories: any = {};

  // Categorize images based on prefix
  fileNames.forEach((fileName) => {
    const prefix = fileName.split("-")[0];
    if (!categories[prefix]) {
      categories[prefix] = [];
    }
    categories[prefix].push(fileName);
  });

  return (
    <div className="container mx-auto p-4">
      {Object.keys(categories).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold capitalize mb-4">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories[category].map((fileName: string, index: number) => (
              <div key={index} className="border rounded overflow-hidden">
                <img
                  src={`/public/products/${fileName}`}
                  alt={fileName}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
