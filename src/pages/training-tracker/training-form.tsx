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
} from '../../components/input';
import { Error } from '../../components/error';

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

interface TrainingFormProps {
  onSubmit: (data: FormData) => void;
}

export function TrainingForm({ onSubmit }: TrainingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
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
            <Error message={errors.exerciseName.message} />
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputLabel htmlFor="trainingGoal">Objetivo do treino:</InputLabel>
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
            <Error message={errors.trainingGoal.message} />
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
            <Error message={errors.equipmentType.message} />
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
            <Error message={errors.trainingStrategy.message} />
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
            <Error message={errors.numberRepeatSeries.message} />
          )}
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-eucalyptus-700 rounded-lg capitalize font-roboto-bold text-base font-bold transition ease-in-out duration-200 hover:bg-eucalyptus-500"
        >
          Gerar meu treino
        </button>
      </div>
    </form>
  );
}
