import type { SandwichRaw } from '@/models/sandwich'

export const SandwichCard: React.FC<SandwichRaw> = ({ name, owner }) => (
  <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border p-4 shadow-md">
    <div className="flex flex-col items-center space-y-2">
      <div className="text-2xl font-bold">{name}</div>
      <div className="text-sm text-gray-500">{owner}</div>
    </div>
  </div>
)
