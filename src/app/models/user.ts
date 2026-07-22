export type User = {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
};

export type SignUpParams = {
  name: string;
  email: string;
  password: string;
  checkout?: boolean;
  dialogId: string;
};

export type SignInParams = Omit<SignUpParams, 'name'>;

export const sampleUser: User = {
  id: '123',
  email: 'usuario@example.com',
  name: 'Juan Pérez',
  imageUrl: 'https://i.pravatar.cc/300',
};
