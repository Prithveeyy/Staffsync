const SUPABASE_URL = 'https://goproqnviwpueqdnczsr.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvcHJvcW52aXdwdWVxZG5jenNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxOTk0NDEsImV4cCI6MjA4OTc3NTQ0MX0.rj1yr59O_sLh7BH7FaEEbSq9klGExx6INX8-vliysSg'

const { createClient } = supabase
const db = createClient(SUPABASE_URL, SUPABASE_KEY)

function getUser() {
  return JSON.parse(localStorage.getItem('staffsync_user') || 'null')
}

function setUser(user) {
  localStorage.setItem('staffsync_user', JSON.stringify(user))
}

function logout() {
  localStorage.removeItem('staffsync_user')
  window.location.href = 'index.html'
}

function requireAuth() {
  const user = getUser()
  if (!user) window.location.href = 'index.html'
  return user
}

function requireRole(...roles) {
  const user = requireAuth()
  if (!roles.includes(user.role)) window.location.href = 'dashboard.html'
  return user
}