import { useState } from 'react';
import { TrainingWithoutRegister } from './training-without-register';

import {
  ApertureIcon,
  Cable,
  CircleCheckIcon,
  ClipboardTypeIcon,
  DumbbellIcon,
  ListOrderedIcon,
  Trash2Icon,
} from 'lucide-react';

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
        <div className="space-y-4">
          {trainings.map((training, index) => (
            <div
              key={index}
              className={`p-4 bg-woodsmoke-800 border  rounded space-y-3  ${
                completedTrainings.includes(index)
                  ? 'border-eucalyptus-500'
                  : 'border-woodsmoke-600'
              }`}
            >
              <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
                <p className="flex items-center gap-2">
                  <DumbbellIcon
                    className={`${
                      completedTrainings.includes(index)
                        ? 'text-eucalyptus-500'
                        : 'text-woodsmoke-300'
                    }`}
                  />{' '}
                  <span
                    className={`text-sm font-roboto-regular font-normal ${
                      completedTrainings.includes(index)
                        ? 'text-eucalyptus-500'
                        : 'text-woodsmoke-300'
                    }`}
                  >
                    {training.exerciseName}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <ApertureIcon
                    className={`${
                      completedTrainings.includes(index)
                        ? 'text-eucalyptus-500'
                        : 'text-woodsmoke-300'
                    }`}
                  />{' '}
                  <span
                    className={`text-sm font-roboto-regular font-normal ${
                      completedTrainings.includes(index)
                        ? 'text-eucalyptus-500'
                        : 'text-woodsmoke-300'
                    }`}
                  >
                    {training.trainingGoal}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Cable
                    className={`${
                      completedTrainings.includes(index)
                        ? 'text-eucalyptus-500'
                        : 'text-woodsmoke-300'
                    }`}
                  />{' '}
                  <span
                    className={`text-sm font-roboto-regular font-normal ${
                      completedTrainings.includes(index)
                        ? 'text-eucalyptus-500'
                        : 'text-woodsmoke-300'
                    }`}
                  >
                    {training.equipmentType}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <ClipboardTypeIcon
                    className={`${
                      completedTrainings.includes(index)
                        ? 'text-eucalyptus-500'
                        : 'text-woodsmoke-300'
                    }`}
                  />
                  <span
                    className={`text-sm font-roboto-regular font-normal ${
                      completedTrainings.includes(index)
                        ? 'text-eucalyptus-500'
                        : 'text-woodsmoke-300'
                    }`}
                  >
                    {training.trainingStrategy}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <ListOrderedIcon
                    className={`${
                      completedTrainings.includes(index)
                        ? 'text-eucalyptus-500'
                        : 'text-woodsmoke-300'
                    }`}
                  />
                  <span
                    className={`text-sm font-roboto-regular font-normal ${
                      completedTrainings.includes(index)
                        ? 'text-eucalyptus-500'
                        : 'text-woodsmoke-300'
                    }`}
                  >
                    {training.numberRepeatSeries}
                  </span>
                </p>
              </div>

              <div className="border-t border-woodsmoke-600 pt-3 flex items-center justify-end gap-2">
                <button onClick={() => handleComplete(index)}>
                  <CircleCheckIcon className="text-emerald-500" />
                </button>
                <button onClick={() => onDelete(index)}>
                  <Trash2Icon className="text-carnation-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
