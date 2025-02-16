import { Pencil2Icon } from '@radix-ui/react-icons';
import { Avatar } from './avatar';

export function Sidebar() {
  return (
    <aside className="bg-woodsmoke-800 rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background Gym Cover Img"
        className="w-full h-[4.5rem] object-cover"
      />

      <div className="flex flex-col items-center -mt-6">
        <Avatar
          githubURL="https://github.com/LucasAnselmoSilva12345.png"
          className="border-2 border-eucalyptus-600"
        />

        <div className="pt-4 flex flex-col items-center justify-center gap-1">
          <strong className="text-sm lg:text-base font-roboto-bold text-woodsmoke-200">
            Lucas Anselmo
          </strong>
          <span className="text-xs lg:text-sm text-woodsmoke-400">
            Personal Trainer
          </span>
        </div>
      </div>

      <footer className="border-t border-solid border-t-neutral-700 mt-6 pt-6 px-8 pb-8">
        <a
          href="#"
          className="py-4 px-6 flex items-center justify-center gap-2 bg-transparent text-xs lg:text-sm font-bold font-roboto-bold text-eucalyptus-500 border border-solid border-eucalyptus-500 rounded-lg transition-colors hover:bg-eucalyptus-700 hover:text-eucalyptus-50 hover:border-emerald-700"
        >
          <Pencil2Icon className="w-4 h-4" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
