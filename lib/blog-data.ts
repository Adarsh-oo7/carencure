export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: number
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'benefits-of-home-nursing-care',
    title: 'Benefits of Home Nursing Care for Seniors',
    excerpt: 'Discover how professional home nursing care can improve quality of life for seniors and provide peace of mind for families.',
    content: `Home nursing care has become an increasingly popular option for seniors and their families. It provides personalised medical attention in the comfort of your own home, which can significantly improve overall well-being.

## Why Choose Home Nursing Care?

Home nursing care offers numerous advantages over traditional facility-based care. Patients benefit from staying in familiar surroundings, maintaining independence, and receiving one-on-one attention from trained professionals.

### Key Benefits:

1. **Personalised Care**: Each patient receives a customised care plan tailored to their specific needs and medical conditions.

2. **Comfort and Familiarity**: Remaining at home reduces stress and anxiety, contributing to faster recovery and better health outcomes.

3. **Cost-Effective**: Home care is often more affordable than residential care facilities while providing superior quality care.

4. **Family Involvement**: Home nursing allows family members to remain actively involved in the care process.

5. **Flexibility**: Care schedules can be adjusted based on the patient's changing needs and preferences.

## Services Offered

Our professional nurses provide a comprehensive range of services including wound care, medication management, physical therapy support, and chronic disease management. We work closely with patients and their families to ensure the highest standard of care.

## Get Started Today

If you're considering home nursing care for yourself or a loved one, contact us for a free consultation. Our expert team is ready to discuss your care needs and develop a personalised care plan.`,
    author: 'Dr. Sarah Mitchell',
    date: '2024-05-15',
    category: 'Senior Care',
    image: 'https://images.unsplash.com/photo-1631217314830-4690f6a46b28?w=800&h=400&fit=crop',
    readTime: 5,
    tags: ['home care', 'seniors', 'nursing', 'health'],
  },
  {
    id: '2',
    slug: 'post-surgery-recovery-tips',
    title: 'Post-Surgery Recovery: Essential Tips and Guidelines',
    excerpt: 'Learn the best practices for a smooth and speedy recovery after surgery with expert guidance from our nursing team.',
    content: `Recovering from surgery is a critical period that requires proper care, attention, and patience. The right post-operative care can significantly influence your recovery timeline and overall health outcomes.

## Immediate Post-Surgery Care

In the first 24 hours following surgery, it's crucial to follow your surgeon's instructions carefully. This includes managing pain, preventing infection, and monitoring for any complications.

### Essential Recovery Steps:

1. **Pain Management**: Take prescribed medications as directed to manage pain effectively.

2. **Wound Care**: Keep the surgical site clean and dry, changing dressings as instructed.

3. **Mobility**: Gradually increase movement as approved by your healthcare provider.

4. **Nutrition**: Eat a balanced diet rich in protein to support healing.

5. **Rest**: Ensure adequate sleep to allow your body to heal properly.

## When to Seek Help

Contact your healthcare provider immediately if you experience excessive bleeding, signs of infection, severe pain, or any unusual symptoms.

## Professional Support

Our nursing team specializes in post-operative care and can provide in-home support during your recovery period. We monitor your progress, manage medications, and ensure you're following recovery protocols correctly.`,
    author: 'Nurse John Thompson',
    date: '2024-05-10',
    category: 'Post-Surgery Care',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
    readTime: 6,
    tags: ['surgery', 'recovery', 'post-operative', 'nursing care'],
  },
  {
    id: '3',
    slug: 'managing-chronic-diseases',
    title: 'Managing Chronic Diseases: A Comprehensive Guide',
    excerpt: 'Expert advice on managing chronic conditions like diabetes, hypertension, and COPD for better health outcomes.',
    content: `Living with a chronic disease requires ongoing management, lifestyle adjustments, and professional support. Proper disease management can help prevent complications and improve your quality of life significantly.

## Understanding Chronic Disease Management

Chronic disease management involves a holistic approach that includes medical treatment, lifestyle modifications, and regular monitoring. The goal is to keep your condition under control and prevent complications.

### Key Management Strategies:

1. **Regular Monitoring**: Track your vital signs and symptoms consistently.

2. **Medication Adherence**: Take your medications exactly as prescribed.

3. **Lifestyle Modifications**: Maintain a healthy diet, exercise regularly, and manage stress.

4. **Regular Check-ups**: Attend all scheduled appointments with your healthcare providers.

5. **Patient Education**: Understand your condition and learn about warning signs.

## Common Chronic Conditions

We specialize in managing various chronic conditions including diabetes, hypertension, heart disease, COPD, and arthritis. Each condition requires a tailored approach.

## Support and Resources

Our team provides education, support, and professional care to help you manage your chronic condition effectively. We work with you and your physicians to optimise your health outcomes.`,
    author: 'Dr. Emily Richardson',
    date: '2024-05-05',
    category: 'Chronic Care',
    image: 'https://images.unsplash.com/photo-1576091160675-112cd5ffb513?w=800&h=400&fit=crop',
    readTime: 7,
    tags: ['chronic disease', 'management', 'health', 'wellness'],
  },
  {
    id: '4',
    slug: 'wound-care-best-practices',
    title: 'Wound Care Best Practices for Faster Healing',
    excerpt: 'Learn proper wound care techniques to promote healing and prevent infection in various types of wounds.',
    content: `Proper wound care is essential for preventing infections and promoting faster healing. Whether you have a minor cut or a serious surgical wound, correct care makes a significant difference in recovery.

## Basic Wound Care Principles

The foundation of wound care involves cleaning, protecting, and monitoring the wound. These simple steps can prevent complications and support natural healing processes.

### Wound Care Steps:

1. **Clean the Wound**: Use mild soap and water to gently clean the area.

2. **Control Bleeding**: Apply gentle pressure with a clean cloth until bleeding stops.

3. **Apply Antiseptic**: Use an appropriate antiseptic solution as recommended.

4. **Dress Appropriately**: Use sterile dressings suitable for your wound type.

5. **Change Dressings**: Follow recommended schedules for dressing changes.

## Signs of Infection

Watch for increased redness, warmth, swelling, pus, or fever. Seek medical attention immediately if you notice these warning signs.

## Professional Wound Care

For complex wounds, chronic ulcers, or surgical wounds, professional care is essential. Our nurses are trained in advanced wound care techniques and can manage your wound in the comfort of your home.`,
    author: 'Wound Care Specialist Lisa Chen',
    date: '2024-04-28',
    category: 'Wound Care',
    image: 'https://images.unsplash.com/photo-1579154204601-01d5b5013227?w=800&h=400&fit=crop',
    readTime: 5,
    tags: ['wound care', 'healing', 'infection prevention', 'nursing'],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)))
}
