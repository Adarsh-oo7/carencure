// ============================================================
// Single source of truth for regulatory registration claims.
// Every page that mentions NDIS / aged care registration reads from here,
// so a status change only needs to be made in one place.
// ============================================================

export const NDIS_REGISTRATION = {
  /** Confirmed by the business owner (Oct 2026). */
  isRegistered: true,
  /** NDIS Commission registration ID — add once supplied so pages can display it. */
  registrationNumber: '',
  /** Registration groups (e.g. "0114 Community Nursing Care") — add once supplied. */
  groups: [] as string[],
  registerUrl: 'https://www.ndiscommission.gov.au/provider-registration/find-registered-provider',
}

export const AGED_CARE_REGISTRATION = {
  /**
   * Care N Cure is NOT a registered Support at Home provider.
   * Clinical nursing is delivered as an associated provider (subcontractor)
   * for registered providers such as Trilogy Care, or for self-managing clients
   * through their registered provider.
   */
  isRegistered: false,
  partnerExample: 'Trilogy Care',
}

export const NDIS_STATUS_LINE = NDIS_REGISTRATION.isRegistered
  ? 'Care N Cure is a registered NDIS provider, so we can support Agency-managed (NDIA-managed), Plan-managed and Self-managed participants.'
  : 'Care N Cure supports Plan-managed and Self-managed NDIS participants.'
