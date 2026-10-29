// ============================================================
// Single source of truth for regulatory registration claims.
// Every page that mentions NDIS / aged care registration reads from here,
// so a status change only needs to be made in one place.
// ============================================================

export const NDIS_REGISTRATION = {
  /**
   * Set to false until official NDIS Commission registration certificate
   * and registration ID are confirmed. Care N Cure delivers clinical nursing
   * for Plan-Managed and Self-Managed NDIS participants legally and compliantly.
   */
  isRegistered: false,
  registrationNumber: '',
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

export const NDIS_STATUS_LINE =
  'Care N Cure provides clinical nursing care for Plan-Managed and Self-Managed NDIS participants across Perth with AHPRA Registered Nurses. We invoice your Plan Manager directly at standard NDIS price limits with zero out-of-pocket hassle.'
