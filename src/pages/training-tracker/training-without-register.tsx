import { Empty } from '../../assets/empty';

export function TrainingWithoutRegister() {
  return (
    <div className="border-t border-woodsmoke-600">
      <div className="pt-6 flex flex-col items-center justify-center gap-4">
        <Empty />

        <div className="text-center">
          <p className="text-woodsmoke-400 font-roboto-bold font-bold text-base">
            Você ainda não registrou o seu treino de hoje.
          </p>
          <span className="text-woodsmoke-400 font-roboto-regular text-sm font-normal">
            Registre agora e continue avançando rumo aos seus objetivos!
          </span>
        </div>
      </div>
    </div>
  );
}
