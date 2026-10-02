import React from 'react'
import { NativeBottomSheet, NativeBottomSheetProps } from '../NativeBottomSheet'

// Web layout props are accepted so shared callers typecheck on native. The bottom sheet ignores them.
export type ContextMenuProps = NativeBottomSheetProps & {
  menuWidth?: number
  fullWidth?: boolean
  closeOnContentClick?: boolean
  stretch?: boolean
  menuPlacement?: 'top' | 'bottom'
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  trigger,
  children,
  testID,
  onOpenChange,
  open,
  openOnLongPress,
  keyboardBehavior,
  keyboardBlurBehavior,
  android_keyboardInputMode
}) => {
  // TS workaround: some build/JSX resolutions treat `NativeBottomSheet` as having no props.
  // Casting keeps runtime behavior identical while unblocking the TS compile.
  const BottomSheetComponent = NativeBottomSheet as unknown as React.ComponentType<ContextMenuProps>

  return (
    <BottomSheetComponent
      trigger={trigger}
      open={open}
      onOpenChange={onOpenChange}
      testID={testID}
      openOnLongPress={openOnLongPress}
      keyboardBehavior={keyboardBehavior}
      keyboardBlurBehavior={keyboardBlurBehavior}
      android_keyboardInputMode={android_keyboardInputMode}
    >
      {children}
    </BottomSheetComponent>
  )
}

ContextMenu.displayName = 'ContextMenu'
