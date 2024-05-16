import { createUser, getUsers } from '@/actions/user-actions';
import AssistantWrapper from '@/components/assistant-canvas';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserData } from '@/lib/types/user.types';

export default async function Home() {
  const users = await getUsers();

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-2 py-10 lg:p-24'>
      <h1 className='text-4xl font-bold'>I&apos;m Pearl</h1>

      <ScrollArea className='h-64 max-w-lg w-full bg-gray-50 rounded-lg border p-2 mt-2'>
        <div className='text-lg text-center gap-2 grid'>
          {users.map((user: UserData, index: number) => (
            <div
              key={index}
              className='bg-white rounded-lg border p-4 grid grid-cols-1 lg:grid-cols-2 gap-2 '
            >
              <h1 className='text-xs text-left'>Name: {user.name}</h1>
              <h1 className='text-xs text-left'>Email: {user.email}</h1>
              <h1 className='text-xs text-left'>Phone: {user.phone_number}</h1>
              <h1 className='text-xs text-left'>
                Social Styles: {user.social_styles}
              </h1>
              <h1 className='text-xs text-left'>Interests: {user.interests}</h1>
            </div>
          ))}
        </div>
      </ScrollArea>

      <AssistantWrapper />
    </main>
  );
}
