import { useAppSelector, useAppDispatch } from './hooks'

export function Location() {
    const locate = useAppSelector(state => state.location)
    const dispatch = useAppDispatch()
}
