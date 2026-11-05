import { Suspense } from 'react';
import WeddingInvitation from '../components/WeddingInvitation';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <WeddingInvitation />
    </Suspense>
  );
}
