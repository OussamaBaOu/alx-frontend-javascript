import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let p;
  let u;
  try {
    p = await uploadPhoto();
    u = await createUser();
  } catch (error) {
    p = null;
    u = null;
  }
  return { p, u };
}
