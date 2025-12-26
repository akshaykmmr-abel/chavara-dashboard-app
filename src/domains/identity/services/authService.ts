export async function logout(): Promise<void> {
  await fetch(`${process.env.BACKEND_API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  })
}

export async function verifyAuth(): Promise<boolean> {
  try {
    const response = await fetch(`${process.env.BACKEND_AUTH_VERIFY_URL}`, {
      credentials: 'include',
    })
    return response.ok
  } catch {
    return false
  }
}
