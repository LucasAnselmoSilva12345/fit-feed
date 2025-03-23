import { useState } from 'react';
import { TrainingWithoutRegister } from './training-without-register';

interface TrainingData {
  exerciseName: string;
  trainingGoal: string;
  equipmentType: string;
  trainingStrategy: string;
  numberRepeatSeries: string;
}

interface TrainingListProps {
  trainings: TrainingData[];
  onComplete: (index: number) => void;
  onDelete: (index: number) => void;
}

export function TrainingList({
  trainings,
  onComplete,
  onDelete,
}: TrainingListProps) {
  const [completedTrainings, setCompletedTrainings] = useState<number[]>([]);

  const handleComplete = (index: number) => {
    setCompletedTrainings((prev) => [...prev, index]);
    onComplete(index);
  };

  return (
    <div className="mt-6">
      {trainings.length === 0 ? (
        <TrainingWithoutRegister />
      ) : (
        <ul className="space-y-4">
          {trainings.map((training, index) => (
            <li
              key={index}
              className={`p-4 border rounded-lg ${
                completedTrainings.includes(index) ? 'bg-green-100' : 'bg-white'
              }`}
            >
              <p>
                <strong>Nome do exercício:</strong> {training.exerciseName}
              </p>
              <p>
                <strong>Objetivo do treino:</strong> {training.trainingGoal}
              </p>
              <p>
                <strong>Tipo do equipamento:</strong> {training.equipmentType}
              </p>
              <p>
                <strong>Estratégia de treino:</strong>{' '}
                {training.trainingStrategy}
              </p>
              <p>
                <strong>Séries e repetições:</strong>{' '}
                {training.numberRepeatSeries}
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  className="p-2 bg-green-500 text-white rounded-md hover:bg-green-400"
                  onClick={() => handleComplete(index)}
                >
                  Concluir
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded-md hover:bg-red-400"
                  onClick={() => onDelete(index)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
