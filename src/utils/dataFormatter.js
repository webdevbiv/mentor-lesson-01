import { formatDistanceToNow, format } from 'date-fns'


export function dateFormatter(date) {
    return formatDistanceToNow(new Date(date), {addSuffix: true})
}

export function formatDateTransactions(date) {
    return format(new Date(date), 'Pp')
}