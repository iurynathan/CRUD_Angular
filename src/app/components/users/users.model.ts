export interface Users {
  token?: string
  email?: string
  password?: string
  id?: string
  name?: string
  job?: string
  page?: number
  per_page?: number
  total?: number
  total_pages?: number
  data?: [
    {
      id?: string,
      email?: string,
      first_name?: string,
      last_name?: string,
      avatar?: string,
    }
  ]
  updatedAt?: string
}
