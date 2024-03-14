/* eslint-disable react/prop-types */
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
export function CustomContextMenu ({ onDelete, onEdit }) {
  return (
    <ContextMenu id='custom-context-menu'>
      <MenuItem onClick={onDelete}>Eliminar</MenuItem>
      <MenuItem onClick={onEdit}>Editar</MenuItem>
    </ContextMenu>
  )
}
