
import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
    useEffect(() => {
        // Update Document Title
        const fullTitle = `${title} | Golfwang0x`;
        document.title = fullTitle;

        // Update Meta Description
        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                metaDescription.setAttribute('content', description);
                document.head.appendChild(metaDescription);
            }

            // Update Open Graph Description
            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) {
                ogDescription.setAttribute('content', description);
            }
        }

        // Update Open Graph Title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', fullTitle);
        }

    }, [title, description]);

    return null;
};

export default SEO;
