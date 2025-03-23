import { useState } from 'react';
import { TrainingForm } from './training-form';
import { TrainingList } from './training-list';

interface TrainingData {
  exerciseName: string;
  trainingGoal: string;
  equipmentType: string;
  trainingStrategy: string;
  numberRepeatSeries: string;
  completed: boolean;
}

export function TrainingTracker() {
  const [trainings, setTrainings] = useState<TrainingData[]>([]);
  const completedTrainings = trainings.filter(
    (training) => training.completed
  ).length;

  const handleAddTraining = (training: TrainingData) => {
    setTrainings((prevTrainings) => [
      ...prevTrainings,
      { ...training, completed: false },
    ]);
  };

  const handleCompleteTraining = (index) => {
    setTrainings((prevTrainings) =>
      prevTrainings.map((training, i) =>
        i === index ? { ...training, completed: true } : training
      )
    );
  };

  const handleDeleteTraining = (index) => {
    setTrainings((prevTrainings) =>
      prevTrainings.filter((_, i) => i !== index)
    );
  };

  return (
    <section className="w-full lg:max-w-[70rem] lg:mx-auto">
      <TrainingForm onSubmit={handleAddTraining} />

      <div className="mt-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold font-roboto-bold text-eucalyptus-500">
            Exercícios criados
          </span>
          <span className="bg-woodsmoke-800 text-white px-3 py-1 rounded-full text-xs">
            {trainings.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold font-roboto-bold text-eucalyptus-500">
            Concluídos
          </span>
          <span className="bg-woodsmoke-800 text-white px-3 py-1 rounded-full text-xs">
            {completedTrainings} de {trainings.length}
          </span>
        </div>
      </div>

      <TrainingList
        trainings={trainings}
        onComplete={handleCompleteTraining}
        onDelete={handleDeleteTraining}
      />
    </section>
  );
}
