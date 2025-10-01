import React from 'react';

const SectionHeading = ({title, subTitle}:{title:string, subTitle:string}) => {
    return (
        
            <div className="text-center mb-16">
                <div className="flex justify-center items-center">
                    <div className="w-2.5 h-2.5 bg-gradient-to-r rounded-full from-[#8236fb] to-[#076ef4]"></div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#8236fb] to-[#076ef4] bg-clip-text text-transparent py-4">
                        {title}
                    </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {subTitle}
                </p>
            </div>
        
    );
};

export default SectionHeading;