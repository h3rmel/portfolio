import type { Component } from 'vue';
import {
  PhEye,
  PhHeadCircuit,
  PhHourglassHigh,
  PhKanban,
  PhLightbulbFilament,
  PhTarget,
  PhUsersThree,
  PhWaveform
} from '@phosphor-icons/vue';

export const softSkillsData: {
  name: string;
  desc: string;
  icon: Component;
}[] = [
  {
    name: 'active_listening',
    desc: 'active_listening_desc',
    icon: PhWaveform
  },
  {
    name: 'adaptability',
    desc: 'adaptability_desc',
    icon: PhHeadCircuit
  },
  {
    name: 'team_work',
    desc: 'team_work_desc',
    icon: PhUsersThree
  },
  {
    name: 'analytic_view',
    desc: 'analytic_view_desc',
    icon: PhEye
  },
  {
    name: 'objectivity',
    desc: 'objectivity_desc',
    icon: PhTarget
  },
  {
    name: 'problem_solving',
    desc: 'problem_solving_desc',
    icon: PhLightbulbFilament
  },
  {
    name: 'scrum_and_kanban',
    desc: 'scrum_and_kanban_desc',
    icon: PhKanban
  },
  {
    name: 'time_management',
    desc: 'time_management_desc',
    icon: PhHourglassHigh
  }
];
