function getEnv() {
  const ENV = {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  };

  Object.keys(ENV).forEach((key) => {
    if (!ENV[key as keyof typeof ENV]) {
      throw new Error(`Missing env: ${key}`);
    }
  });

  return ENV as {
    API_URL: string;
  };
}

export const ENV = getEnv();
