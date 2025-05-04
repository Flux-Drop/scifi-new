// app/admin/banner/@modal/delete/[id]/page.tsx
'use client';

import { useRouter, useParams } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { deleteBanner } from '@/actions/banner';


export default function DeleteModal() {
  const router = useRouter();
  const { id } = useParams();

  const handleDelete = async () => {
    await deleteBanner(id as string);
    router.push('/admin/banner'); 
    router.refresh();             
  };

  return (

    <Dialog open onOpenChange={() => router.push('/admin/banner')}>
      <DialogContent>
        <DialogHeader>Confirm Deletion</DialogHeader>
        <p>Are you sure you want to delete this banner?</p>
        <DialogFooter>
          <Button variant="ghost" onClick={() => router.push('/admin/banner')}>Cancel</Button>
          <Button variant="destructive" onClick={handleDelete}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}