import React from "react"

interface JsonLdProps {
  data: Record<string, any>
}

const JsonLdDinamic: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

export default JsonLdDinamic
