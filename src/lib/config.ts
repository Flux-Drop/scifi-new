const config = {
  env: {
    apiEndpointDev: process.env.NEXT_PUBLIC_API_ENDPOINT_DEV!,
    apiEndpointProd: process.env.NEXT_PUBLIC_API_ENDPOINT_PROD!,
    imageKit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
  },
};

export default config;
