import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from a .env file into process.env
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Interface to type-check the environment variables
interface EnvVariables {
  JWT_SECRET_KEY: string;
  // Add other environment variables as needed
}

// Function to retrieve and type-check environment variables
function getEnvVariables(): EnvVariables {
  const { JWT_SECRET_KEY } = process.env;

  if (!JWT_SECRET_KEY) {
    throw new Error('Missing required environment variable: JWT_SECRET_KEY');
  }

  return {
    JWT_SECRET_KEY,
  };
}

const EnvVariable = getEnvVariables();

export default EnvVariable;
