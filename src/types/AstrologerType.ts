type AstrologerType = {
    image: string; // URL or image source
    name: string;
    contactNo: string;
    gender: 'Male' | 'Female';
    isVerified: boolean;
    chatRequest: number; // Number of chat requests
    callRequest: number; // Number of call requests
  };