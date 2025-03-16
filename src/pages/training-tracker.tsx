import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  exerciseName: z.string().nonempty('O campo nome do exercício é obrigatório'),
  equipmentType: z
    .string()
    .nonempty('O campo tipo de equipamento é obrigatório'),
  weight: z.string().nonempty('O campo de carga é obrigatório'),
  numberRepeatSeries: z
    .string()
    .nonempty('O campo de número de repetições é obrigatório'),
  typeOfExercise: z
    .string()
    .nonempty('O campo tipo do exercício é obrigatório'),
  trainingGoal: z.string().nonempty('O campo objetivo do treino é obrigatório'),
});

type FormData = z.infer<typeof formSchema>;

export function TrainingTracker() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Dados enviados', data);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="exerciseName"
                className="font-roboto-medium text-base text-woodsmoke-200"
              >
                Nome do exercício:{' '}
              </label>
              <input
                id="exerciseName"
                className="w-full py-2 px-2 bg-woodsmoke-800 rounded font-roboto-regular text-sm text-white outline-none focus:outline-eucalyptus-500"
                placeholder="Adicione um novo exercício"
                {...register('exerciseName')}
              />
            </div>
            {errors.exerciseName && (
              <p className="text-carnation-600 text-xs font-roboto-semi-bold font-semibold">
                {errors.exerciseName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="numberRepeatSeries"
                className="font-roboto-medium text-base text-woodsmoke-200"
              >
                Repetições:{' '}
              </label>
              <input
                id="numberRepeatSeries"
                className="w-full py-2 px-2 bg-woodsmoke-800 rounded font-roboto-regular text-sm text-white outline-none focus:outline-eucalyptus-500"
                placeholder="Adicione um novo exercício"
                {...register('numberRepeatSeries')}
              />
            </div>
            {errors.numberRepeatSeries && (
              <p className="text-carnation-600 text-xs font-roboto-semi-bold font-semibold">
                {errors.numberRepeatSeries.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="typeOfExercise"
                className="font-roboto-medium text-base text-woodsmoke-200"
              >
                Tipo do exercício:{' '}
              </label>
              <input
                id="typeOfExercise"
                className="w-full py-2 px-2 bg-woodsmoke-800 rounded font-roboto-regular text-sm text-white outline-none focus:outline-eucalyptus-500"
                placeholder="Adicione um novo exercício"
                {...register('typeOfExercise')}
              />
            </div>
            {errors.typeOfExercise && (
              <p className="text-carnation-600 text-xs font-roboto-semi-bold font-semibold">
                {errors.typeOfExercise.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-4 bg-eucalyptus-700 rounded-lg capitalize font-roboto-bold text-base font-bold transition ease-in-out duration-200 hover:bg-eucalyptus-500"
        >
          enviar
        </button>
      </form>
    </div>
  );
}
