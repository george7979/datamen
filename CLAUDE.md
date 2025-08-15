# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

**Datamen** is a strategic business planning project for a new Polish company specializing in custom storage solutions across multiple high-growth sectors. The project contains comprehensive market research and strategic documentation for a multi-segment approach targeting both creative industries and security sectors.

### Target Markets
- **Primary Focus**: Small and medium post-production studios (5-25 employees)
- **Secondary Focus**: CCTV and security companies (20-200 employees)
- **Geographic focus**: Kraków, Wrocław, Gdańsk, Warszawa (distributed across Poland)
- **Value proposition**: "Professional storage solutions for growing technology companies"

## Project Structure

The repository contains strategic documents covering multiple market segments:

### Primary Documents
- `datamen-strategy-postproduction-clients.md` - Market strategy focused on post-production studios
- `datamen-strategy-cctv-security.md` - Market strategy focused on CCTV and security companies
- `storage-companies-report.md` - Competitive analysis of storage companies in Poland

### Document Purpose
- **Post-production strategy**: Contains 10 identified target studios, geographic analysis, pricing strategy, and 3-tier client segmentation
- **CCTV strategy**: Contains 10 identified security companies, 4-tier segmentation, compliance requirements, and specialized storage needs
- **Competitive report**: Analyzes 12 Polish companies and 2 benchmark companies (Puget Systems, eOnea.pl) in the custom storage market

## Business Architecture

### Multi-Segment Approach

**Post-production Segmentation (3 tiers):**
1. **Basic Professional** (3-8 people): Entry-level NAS solutions, 10-50TB
2. **Growing Professional** (8-15 people): Professional NAS with performance optimization, 50-200TB  
3. **Advanced Creative** (15-25 people): Custom storage arrays, 200TB+, high-performance VFX

**CCTV/Security Segmentation (4 tiers):**
1. **Regional Installers** (20-50 people): 50-500TB, RODO compliance, 3-8k PLN monthly
2. **Distributors/Integrators** (50-200 people): 500TB-5PB, multi-location, 8-25k PLN monthly
3. **Monitoring Centers** (100+ people): 5-50PB, 24/7 reliability, 25-80k PLN monthly
4. **Manufacturers** (200+ people): 10PB+, R&D support, 50k+ PLN monthly

### Revenue Model
- **Combined market potential**: 20-120M PLN annually
- **Year 1 target**: 13-20 clients total (both segments)
- **Combined revenue target**: 4-9M PLN
- Monthly recurring: 2,000-80,000 PLN depending on segment and tier
- Setup fees: 5,000-100,000 PLN
- Additional services: migration, consulting, ongoing support, compliance

### Key Technologies
- **ZFS/TrueNAS** as primary storage technology
- **Open-source focus** for cost-effective solutions
- **Custom hardware builds** based on Supermicro platforms
- **RODO compliance** features for CCTV segment
- **High-throughput optimization** for real-time video recording

## Competitive Analysis

### Market Positioning
- **Direct competitor**: eOnea.pl (TrueNAS specialist, SME focus)
- **Differentiation**: Multi-segment expertise (creative + security), regional presence, compliance specialization
- **Competitive advantage**: Understanding of both creative workflows and CCTV requirements, flexible pricing, RODO expertise

### Target Company Analysis
Each target company (both segments) is documented with:
- Company details (website, size, specialization)
- Storage needs analysis (creative workflows or CCTV requirements)
- Pain points identification (technical and compliance)
- Opportunity assessment and budget estimates

## Working with This Project

### Content Updates
When modifying strategic documents:
- Maintain the structured format with clear sections
- Update market data with sources and dates
- Preserve the detailed studio analysis format
- Keep financial projections realistic and sourced

### Research Guidelines
- Focus on Polish market for competitive analysis
- Prioritize ZFS/TrueNAS expertise in vendor evaluation
- Maintain distinction between SME and enterprise market segments
- Track both creative industry workflows and CCTV/security requirements
- Monitor RODO compliance developments for security segment
- Include geographic distribution analysis for multi-segment approach

### Documentation Standards
- Use Polish language for local market content
- Include website references for all mentioned companies
- Maintain tabular format for comparative analysis
- Preserve financial figures in Polish złoty (PLN)

## Implementation Roadmap

The project follows a 3-phase approach:
1. **Foundation** (Months 1-6): Team assembly, pilot programs
2. **Market Entry** (Months 6-12): First 5 clients, case studies
3. **Scale** (Months 12-24): 10+ clients, multi-city presence

### Success Metrics
- Year 1 target: 13-20 clients total (8-12 post-production + 5-8 CCTV)
- Combined revenue target: 4-9M PLN
- Market share goal: 10-20% of SME creative segment + 5-10% of mid-market CCTV segment

## Important Notes

This is a **multi-segment strategy and research project** - not a software development codebase. Focus on:
- Market analysis accuracy across both creative and security segments
- Competitive positioning clarity for dual-market approach
- Financial model viability for combined revenue streams
- Implementation timeline realism for multi-segment expansion
- RODO compliance requirements for security sector
- Technology requirements for diverse storage needs (creative workflows vs CCTV recording)