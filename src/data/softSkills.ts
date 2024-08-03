import type { Component } from 'vue';
import { AudioWaveform, Users, View, Target, Hourglass, SquareKanban, Lightbulb, BrainCircuit } from 'lucide-vue-next';

export const softSkillsData: {
  name: string;
  desc: string;
  icon: Component;
}[] = [
  {
    name: 'active_listening',
    desc: 'active_listening_desc',
    icon: AudioWaveform
  },
  {
    name: 'adaptability',
    desc: 'adaptability_desc',
    icon: BrainCircuit
  },
  {
    name: 'team_work',
    desc: 'team_work_desc',
    icon: Users
  },
  {
    name: 'analytic_view',
    desc: 'analytic_view_desc',
    icon: View
  },
  {
    name: 'objectivity',
    desc: 'objectivity_desc',
    icon: Target
  },
  {
    name: 'problem_solving',
    desc: 'problem_solving_desc',
    icon: Lightbulb
  },
  {
    name: 'scrum_and_kanban',
    desc: 'scrum_and_kanban_desc',
    icon: SquareKanban
  },
  {
    name: 'time_management',
    desc: 'time_management_desc',
    icon: Hourglass
  }
];
