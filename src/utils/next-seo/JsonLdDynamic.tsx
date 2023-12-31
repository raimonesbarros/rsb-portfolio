/* eslint-disable react/no-danger */
import React from "react";

interface JsonLdProps {
  data: Record<string, any>;
}

const JsonLdDynamic: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
};

export default JsonLdDynamic;
