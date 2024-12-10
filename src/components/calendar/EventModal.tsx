import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { Event, NewEvent } from '../../types/event';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (event: NewEvent) => void;
  onDelete?: () => void;
  initialData?: Event | null;
}

export const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  onDelete,
  initialData,
}) => {
  const [formData, setFormData] = React.useState<NewEvent>({
    title: '',
    description: '',
    startTime: new Date(),
    endTime: new Date(),
    userId: 'user1', // Default user ID
  });

  React.useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description,
        startTime: initialData.startTime,
        endTime: initialData.endTime,
        userId: initialData.userId,
      });
    } else {
      setFormData({
        title: '',
        description: '',
        startTime: new Date(),
        endTime: new Date(),
        userId: 'user1',
      });
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleDelete = () => {
    if (onDelete && window.confirm('Are you sure you want to delete this event?')) {
      onDelete();
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-card rounded-lg p-6 w-full max-w-md border border-border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-foreground">
            {initialData ? 'Edit Event' : 'Create Event'}
          </h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X size={24} />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(formData);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-foreground">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full rounded-md bg-secondary border-border text-foreground shadow-sm focus:border-brand-blue focus:ring-brand-blue"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="mt-1 block w-full rounded-md bg-secondary border-border text-foreground shadow-sm focus:border-brand-blue focus:ring-brand-blue"
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground">
                Start Time
              </label>
              <input
                type="datetime-local"
                value={formData.startTime.toISOString().slice(0, 16)}
                onChange={(e) =>
                  setFormData({ ...formData, startTime: new Date(e.target.value) })
                }
                className="mt-1 block w-full rounded-md bg-secondary border-border text-foreground shadow-sm focus:border-brand-blue focus:ring-brand-blue"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">
                End Time
              </label>
              <input
                type="datetime-local"
                value={formData.endTime.toISOString().slice(0, 16)}
                onChange={(e) =>
                  setFormData({ ...formData, endTime: new Date(e.target.value) })
                }
                className="mt-1 block w-full rounded-md bg-secondary border-border text-foreground shadow-sm focus:border-brand-blue focus:ring-brand-blue"
                required
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            {onDelete && (
              <button
                type="button"
                onClick={handleDelete}
                className="flex items-center gap-2 px-4 py-2 text-red-500 hover:text-red-600 transition-colors"
              >
                <Trash2 size={20} />
                Delete
              </button>
            )}
            <div className="flex gap-3 ml-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-border rounded-md text-foreground hover:bg-secondary transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-brand-blue text-white rounded-md hover:opacity-90 transition-opacity"
              >
                {initialData ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};