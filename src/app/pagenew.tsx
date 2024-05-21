import { createUser, getUsers } from '@/actions/user-actions';
import AssistantWrapper from '@/components/assistant-canvas';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserData } from '@/lib/types/user.types';

export default async function Home() {
    const users = await getUsers();

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <header className="w-full py-6 bg-white shadow-md mb-4">
                <h1 className="text-5xl font-extrabold text-center text-black">
                    Pearl Host
                </h1>
            </header>

            <ScrollArea className="h-96 w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="grid gap-4">
                    {users.map((user: UserData, index: number) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 border border-gray-200"
                        >
                            <div>
                                <h1 className="text-sm font-semibold text-gray-800">Name:</h1>
                                <p className="text-sm text-gray-600">{user.name}</p>
                            </div>
                            <div>
                                <h1 className="text-sm font-semibold text-gray-800">Email:</h1>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                            <div>
                                <h1 className="text-sm font-semibold text-gray-800">Phone:</h1>
                                <p className="text-sm text-gray-600">{user.phone_number}</p>
                            </div>
                            <div>
                                <h1 className="text-sm font-semibold text-gray-800">Social Styles:</h1>
                                <p className="text-sm text-gray-600">{user.social_styles}</p>
                            </div>
                            <div>
                                <h1 className="text-sm font-semibold text-gray-800">Interests:</h1>
                                <p className="text-sm text-gray-600">{user.interests}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>

            <AssistantWrapper />

            <footer className="w-full py-4 bg-white shadow-md mt-4">
                <p className="text-center text-gray-500">
                    &copy; 2024 Pearl App. All rights reserved.
                </p>
            </footer>
        </main>
    );
}
