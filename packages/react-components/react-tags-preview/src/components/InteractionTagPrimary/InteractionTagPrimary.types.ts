import { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import { InteractionTagContextValue } from '../../contexts/interactionTagContext';
import { TagAvatarContextValues, UseTagAvatarContextValuesOptions } from '../../utils/useTagAvatarContextValues';

export type InteractionTagPrimaryContextValues = TagAvatarContextValues;

export type InteractionTagPrimarySlots = {
  root: NonNullable<Slot<'button'>>;

  /**
   * Slot for an icon or other visual element
   */
  media?: Slot<'span'>;

  icon?: Slot<'span'>;

  /**
   * Main text for the InteractionTagPrimary button. Children of the root slot are automatically rendered here
   */
  primaryText: Slot<'span'>;

  /**
   * Secondary text that describes or complements the main text
   */
  secondaryText?: Slot<'span'>;
};

/**
 * InteractionTagPrimary Props
 */
export type InteractionTagPrimaryProps = ComponentProps<Partial<InteractionTagPrimarySlots>> & {
  /**
   * Whether the `InteractionTag` component has a `Secondary` component that provides an secondary action.
   * If `true`, the `InteractionTagPrimary` component will adjust its styles to accommodate the `Secondary` component.
   */
  hasSecondaryAction?: boolean;
};

/**
 * State used in rendering InteractionTagPrimary
 */
export type InteractionTagPrimaryState = ComponentState<InteractionTagPrimarySlots> &
  Required<
    Pick<InteractionTagContextValue, 'appearance' | 'disabled' | 'shape' | 'size'> &
      Pick<InteractionTagPrimaryProps, 'hasSecondaryAction'>
  > &
  UseTagAvatarContextValuesOptions;
