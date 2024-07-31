<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/vue';
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="sm">
        {{ $t('navbar.explore') }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem class="gap-1">
        <Icon icon="ph:compass-tool" width="20" />
        <span>{{ $t('navbar.portfolio') }}</span>
      </DropdownMenuItem>
      <DropdownMenuItem class="gap-1">
        <Icon icon="ph:code" width="20" />
        <span>{{ $t('navbar.hard_skills') }}</span>
      </DropdownMenuItem>
      <DropdownMenuItem class="gap-1">
        <Icon icon="ph:chat-teardrop" width="20" />
        <span>{{ $t('navbar.soft_skills') }}</span>
      </DropdownMenuItem>
      <DropdownMenuItem class="gap-1">
        <Icon icon="ph:briefcase" width="20" />
        <span>{{ $t('navbar.contractable_services') }}</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
