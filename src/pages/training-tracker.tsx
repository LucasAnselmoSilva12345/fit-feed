import { zodResolver } from '@hookform/resolvers/zod';
import {
  ApertureIcon,
  Cable,
  ClipboardTypeIcon,
  DumbbellIcon,
  ListOrderedIcon,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  InputContainer,
  InputField,
  InputIcon,
  InputLabel,
  InputRoot,
} from '../components/input';

const formSchema = z.object({
  exerciseName: z.string().nonempty('O campo nome do exercício é obrigatório'),
  trainingGoal: z.string().nonempty('O campo objetivo do treino é obrigatório'),
  equipmentType: z
    .string()
    .nonempty('O campo tipo de equipamento é obrigatório'),
  trainingStrategy: z
    .string()
    .nonempty('O campo estratégia de treino é obrigatório'),
  numberRepeatSeries: z
    .string()
    .nonempty('O campo de número de séries e repetições é obrigatório'),
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
    <section className="w-full lg:max-w-[70rem] lg:mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-end">
        <div className="space-y-3 lg:grid lg:grid-cols-3 lg:items-end lg:gap-2">
          <div className="space-y-2">
            <InputRoot>
              <InputLabel htmlFor="exerciseName">Nome do exercício:</InputLabel>
              <InputContainer>
                <InputIcon>
                  <DumbbellIcon />
                </InputIcon>
                <InputField
                  id="exerciseName"
                  type="text"
                  placeholder="Adicione um novo exercício"
                  {...register('exerciseName')}
                />
              </InputContainer>
            </InputRoot>
            {errors.exerciseName && (
              <p className="text-carnation-600 text-xs font-roboto-semi-bold font-semibold">
                {errors.exerciseName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <InputRoot>
              <InputLabel htmlFor="trainingGoal">
                Objetivo do treino:
              </InputLabel>
              <InputContainer>
                <InputIcon>
                  <ApertureIcon />
                </InputIcon>
                <InputField
                  id="trainingGoal"
                  type="text"
                  placeholder="Ex: Hipertrofia"
                  {...register('trainingGoal')}
                />
              </InputContainer>
            </InputRoot>
            {errors.trainingGoal && (
              <p className="text-carnation-600 text-xs font-roboto-semi-bold font-semibold">
                {errors.trainingGoal.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <InputRoot>
              <InputLabel htmlFor="equipmentType">
                Equipamento utilizado:
              </InputLabel>
              <InputContainer>
                <InputIcon>
                  <Cable />
                </InputIcon>
                <InputField
                  id="equipmentType"
                  type="text"
                  placeholder="Ex: Polia, Máquina, Peso livre"
                  {...register('equipmentType')}
                />
              </InputContainer>
            </InputRoot>
            {errors.equipmentType && (
              <p className="text-carnation-600 text-xs font-roboto-semi-bold font-semibold">
                {errors.equipmentType.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <InputRoot>
              <InputLabel htmlFor="trainingStrategy">
                Estratégia de treino:
              </InputLabel>
              <InputContainer>
                <InputIcon>
                  <ClipboardTypeIcon />
                </InputIcon>
                <InputField
                  id="trainingStrategy"
                  type="text"
                  placeholder="Ex: Progressão de carga, Condicionamento físico"
                  {...register('trainingStrategy')}
                />
              </InputContainer>
            </InputRoot>
            {errors.trainingStrategy && (
              <p className="text-carnation-600 text-xs font-roboto-semi-bold font-semibold">
                {errors.trainingStrategy.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <InputRoot>
              <InputLabel htmlFor="numberRepeatSeries">
                Número de séries e repetições:
              </InputLabel>
              <InputContainer>
                <InputIcon>
                  <ListOrderedIcon />
                </InputIcon>
                <InputField
                  id="numberRepeatSeries"
                  type="text"
                  placeholder="Ex: 3 séries de 15 repetições"
                  {...register('numberRepeatSeries')}
                />
              </InputContainer>
            </InputRoot>
            {errors.numberRepeatSeries && (
              <p className="text-carnation-600 text-xs font-roboto-semi-bold font-semibold">
                {errors.numberRepeatSeries.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full lg:max-w-xs p-4 bg-eucalyptus-700 rounded-lg capitalize font-roboto-bold text-base font-bold transition ease-in-out duration-200 hover:bg-eucalyptus-500"
        >
          Gerar meu treino
        </button>
      </form>
    </section>
  );
}
