/**
 * Base44 frontend SDK examples
 * npm i @base44/sdk
 */
import { createClient } from '@base44/sdk';

export const base44 = createClient({
  appId: 'REPLACE_WITH_YOUR_BASE44_APP_ID'
});

export async function listJobs() {
  return base44.entities.Job.list('-created_date', 200, 0);
}

export async function clockIn({ job_number, job_name, action, class_equipment, note, work_date }) {
  const user = await base44.auth.me();
  return base44.entities.TimeEntry.create({
    company_id: user.data.company_id,
    user_email: user.email,
    employee_name: user.data.employee_name || user.email,
    work_date,
    job_number,
    job_name,
    action,
    class_equipment,
    note,
    is_running: true,
    start_time: new Date().toISOString(),
    hours: 0
  });
}

export async function qbRowsForDate(work_date) {
  const rows = await base44.entities.TimeEntry.list('-created_date', 500, 0);
  return rows
    .filter(r => r.work_date === work_date && !r.is_running)
    .map(r => ({
      Job: `${r.job_number} – ${r.job_name}`,
      Action: r.action,
      Note: r.note || '',
      Class: r.class_equipment || '',
      Hours: r.hours
    }));
}

export async function saveDailyReport(payload) {
  const user = await base44.auth.me();
  return base44.entities.DailyReport.create({
    ...payload,
    company_id: user.data.company_id,
    user_email: user.email
  });
}

export async function registerPttPeer(peer_id) {
  const user = await base44.auth.me();
  return base44.entities.PttPeer.create({
    company_id: user.data.company_id,
    user_email: user.email,
    peer_id,
    display_name: user.data.employee_name || user.email,
    last_seen: new Date().toISOString()
  });
}

export async function listCompanyPttPeers() {
  return base44.entities.PttPeer.list('-last_seen', 50, 0);
}
