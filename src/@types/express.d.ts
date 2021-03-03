declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}

// Incluir o codigo abaixo na Request do Express
// user: { id: string };
