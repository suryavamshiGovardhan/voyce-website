import { Suspense, lazy } from 'react';
import { BASE_PATH } from "@/lib/site";
import MotionDirector from "@/components/site/MotionDirector";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { AuthProvider } from "@/hooks/useAuth";
import { GlobalErrorHandler } from "@/components/GlobalErrorHandler";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LoadingFallback } from "@/components/LoadingFallback";
import { DailyCheckIn } from "@/components/engagement/DailyCheckIn";
import { SuryaChatbot } from "@/components/SuryaChatbot";
import { RouteMeta } from "@/components/site/RouteMeta";

// Eager load critical pages
import Index from "./pages/Index";
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
import NotFound from "./pages/NotFound";
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));

// Lazy load non-critical pages
const VoycePage = lazy(() => import("./pages/VoycePage"));
const PathPage = lazy(() => import("./pages/PathPage"));
const ToolsPage = lazy(() => import("./pages/ToolsPage"));
const LibraryPage = lazy(() => import("./pages/LibraryPage"));
const NewslettersPage = lazy(() => import("./pages/NewslettersPage"));
const ThoughtsPage = lazy(() => import("./pages/ThoughtsPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const JournalPage = lazy(() => import("./pages/JournalPage"));
const JournalHistoryPage = lazy(() => import("./pages/JournalHistoryPage"));
const StressPage = lazy(() => import("./pages/StressPage"));
const TraumaPage = lazy(() => import("./pages/TraumaPage"));
const ADHDPage = lazy(() => import("./pages/ADHDPage"));
const BrainPage = lazy(() => import("./pages/BrainPage"));
const MindHeartGutPage = lazy(() => import("./pages/MindHeartGutPage"));
const NeurosciencePage = lazy(() => import("./pages/NeurosciencePage"));
const WorkbookPage = lazy(() => import("./pages/WorkbookPage"));
const TheoriesPage = lazy(() => import("./pages/TheoriesPage"));
const ACESPage = lazy(() => import("./pages/ACESPage"));
const CDSPage = lazy(() => import("./pages/CDSPage"));
const SchoolsPage = lazy(() => import("./pages/SchoolsPage"));
const DSM5Page = lazy(() => import("./pages/DSM5Page"));
const DSM5AcademyPage = lazy(() => import("./pages/DSM5AcademyPage"));
const DSM5ModulePage = lazy(() => import("./pages/DSM5ModulePage"));
const StoryPage = lazy(() => import("./pages/StoryPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const CreateBlogPage = lazy(() => import("./pages/CreateBlogPage"));
const DraftsPage = lazy(() => import("./pages/DraftsPage"));
const ICD9Page = lazy(() => import("./pages/ICD9Page"));
const ICD9DetailPage = lazy(() => import("./pages/ICD9DetailPage"));
const IntegratedDiagnosticsPage = lazy(() => import("./pages/IntegratedDiagnosticsPage"));
const QuizListPage = lazy(() => import("./pages/QuizListPage"));
const DesireSufferingArticlePage = lazy(() => import("./pages/DesireSufferingArticlePage"));
const AtheismDoctrinePage = lazy(() => import("./pages/AtheismDoctrinePage"));
const Day1JournalPage = lazy(() => import("./pages/Day1JournalPage"));
const FounderPage = lazy(() => import("./pages/FounderPage"));
const WhyIBuiltVoycePage = lazy(() => import("./pages/WhyIBuiltVoycePage"));
const OppositeGenderArticlePage = lazy(() => import("./pages/OppositeGenderArticlePage"));
const SecondChildArticlePage = lazy(() => import("./pages/SecondChildArticlePage"));
const OverthinkingatNightPage = lazy(() => import("./pages/OverthinkingatNightPage"));
const SilenceDiscomfortPage = lazy(() => import("./pages/SilenceDiscomfortPage"));
const CannotSayNoPage = lazy(() => import("./pages/CannotSayNoPage"));
const SearchForMeaningPage = lazy(() => import("./pages/SearchForMeaningPage"));
const SelfCareSelfishnessPage = lazy(() => import("./pages/SelfCareSelfishnessPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfUsePage = lazy(() => import("./pages/TermsOfUsePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const StartHerePage = lazy(() => import("./pages/StartHerePage"));
const StoriesPage = lazy(() => import("./pages/StoriesPage"));
const InvisibleInheritancePage = lazy(() => import("./pages/InvisibleInheritancePage"));
const InvisibleInheritanceTestPage = lazy(() => import("./pages/InvisibleInheritanceTestPage"));
const InvisibleInheritanceTestTakePage = lazy(() => import("./pages/InvisibleInheritanceTestTakePage"));
const InvisibleInheritanceReportPage = lazy(() => import("./pages/InvisibleInheritanceReportPage"));
const SeriesIndexPage = lazy(() => import("./pages/SeriesIndexPage"));
const SeriesEpisodePage = lazy(() => import("./pages/SeriesEpisodePage"));
const AI4SchoolsPage = lazy(() => import("./pages/AI4SchoolsPage"));
const AdminBlueprintPage = lazy(() => import("./pages/AdminBlueprintPage"));
const AdminHubPage = lazy(() => import("./pages/AdminHubPage"));
const AdminKeynotePage = lazy(() => import("./pages/AdminKeynotePage"));
const AdminKeynotePrintPage = lazy(() => import("./pages/AdminKeynotePrintPage"));
const AdminCareersPage = lazy(() => import("./pages/AdminCareersPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));
const StudentsPage = lazy(() => import("./pages/StudentsPage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const ParentsPage = lazy(() => import("./pages/ParentsPage"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SafetyPage = lazy(() => import("./pages/SafetyPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const PartnersPage = lazy(() => import("./pages/PartnersPage"));
const CamHandoffPage = lazy(() => import("./pages/CamHandoffPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename={BASE_PATH}>
              <RouteMeta />
              <MotionDirector />
              <GlobalErrorHandler />
              <DailyCheckIn />
              <SuryaChatbot />
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Critical routes - no lazy loading */}
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                  <Route path="/reset-password" element={<ResetPasswordPage />} />
                  <Route path="/terms" element={<TermsOfUsePage />} />
                  <Route path="/guides" element={<ResourcesPage />} />
                  

                  
                  {/* Lazy-loaded routes */}
                  <Route path="/voyce" element={<VoycePage />} />
                  <Route path="/path" element={<PathPage />} />
                  <Route path="/tools" element={<ToolsPage />} />
                  <Route path="/library" element={<LibraryPage />} />
                  <Route path="/newsletters" element={<NewslettersPage />} />
                  <Route path="/thoughts" element={<ThoughtsPage />} />
                  <Route path="/story" element={<StoryPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/blog/create" element={<CreateBlogPage />} />
                  <Route path="/blog/edit/:slug" element={<CreateBlogPage />} />
                  <Route path="/drafts" element={<DraftsPage />} />
                  <Route path="/stress" element={<StressPage />} />
                  <Route path="/trauma" element={<TraumaPage />} />
                  <Route path="/adhd" element={<ADHDPage />} />
                  <Route path="/brain" element={<BrainPage />} />
                  <Route path="/mind-heart-gut" element={<MindHeartGutPage />} />
                  <Route path="/neuroscience" element={<NeurosciencePage />} />
                  <Route path="/aces" element={<ACESPage />} />
                  <Route path="/cds" element={<CDSPage />} />
                 <Route path="/schools" element={<SchoolsPage />} />
                 <Route path="/ai4schools" element={<AI4SchoolsPage />} />
                 <Route path="/admin" element={<AdminHubPage />} />
                 <Route path="/admin/keynote" element={<AdminKeynotePage />} />
                 <Route path="/admin/keynote/print" element={<AdminKeynotePrintPage />} />
                 <Route path="/admin/careers" element={<AdminCareersPage />} />
                 <Route path="/admin/blueprint" element={<AdminBlueprintPage />} />


                  <Route path="/dsm5" element={<DSM5Page />} />
                  <Route path="/dsm5-academy" element={<DSM5AcademyPage />} />
                  <Route path="/dsm5-academy/module/:moduleId" element={<DSM5ModulePage />} />
                  <Route path="/theories" element={<TheoriesPage />} />
                  <Route path="/workbook" element={<WorkbookPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/journal" element={<JournalPage />} />
                  <Route path="/journal/history" element={<JournalHistoryPage />} />
                  <Route path="/icd9" element={<ICD9Page />} />
                  <Route path="/icd9/:range" element={<ICD9DetailPage />} />
                  <Route path="/diagnostics" element={<IntegratedDiagnosticsPage />} />
                  <Route path="/quizzes" element={<QuizListPage />} />
                  <Route path="/leaderboard" element={<Navigate to="/quizzes" replace />} />
                  <Route path="/article/desire-suffering-journey" element={<DesireSufferingArticlePage />} />
                  <Route path="/article/atheism-doctrines" element={<AtheismDoctrinePage />} />
                  <Route path="/article/day-1-journal" element={<Day1JournalPage />} />
                  <Route path="/suryavamshi-govardhan" element={<FounderPage />} />
                  <Route path="/article/why-i-built-voyce" element={<WhyIBuiltVoycePage />} />
                  <Route path="/article/opposite-gender-behavior" element={<OppositeGenderArticlePage />} />
                  <Route path="/article/second-child-intelligence" element={<SecondChildArticlePage />} />
                  <Route path="/article/overthinking-at-night" element={<OverthinkingatNightPage />} />
                  <Route path="/article/silence-discomfort" element={<SilenceDiscomfortPage />} />
                  <Route path="/article/cannot-say-no" element={<CannotSayNoPage />} />
                  <Route path="/article/search-for-meaning" element={<SearchForMeaningPage />} />
                  <Route path="/article/self-care-selfishness" element={<SelfCareSelfishnessPage />} />
                  
                  {/* First-time user journey */}
                  <Route path="/series" element={<SeriesIndexPage />} />
                  <Route path="/series/:episodeId" element={<SeriesEpisodePage />} />
                  <Route path="/start-here" element={<StartHerePage />} />
                  <Route path="/stories" element={<StoriesPage />} />
                  <Route path="/invisible-inheritance" element={<InvisibleInheritancePage />} />
                  <Route path="/invisible-inheritance/test" element={<InvisibleInheritanceTestPage />} />
                  <Route path="/invisible-inheritance/test/:sessionCode/report" element={<InvisibleInheritanceReportPage />} />
                  <Route path="/invisible-inheritance/test/:sessionCode/:partner" element={<InvisibleInheritanceTestTakePage />} />
                  
                  {/* Marketing / audience pages */}
                  <Route path="/how-it-works" element={<HowItWorksPage />} />
                  <Route path="/students" element={<StudentsPage />} />
                  <Route path="/teachers" element={<TeachersPage />} />
                  <Route path="/parents" element={<ParentsPage />} />
                  <Route path="/features" element={<FeaturesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/safety" element={<SafetyPage />} />
                  <Route path="/faq" element={<FaqPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/resources" element={<ResourcesPage />} />
                  {/* CAM moved to its own site — old links hand off there */}
                  <Route path="/cam" element={<CamHandoffPage />} />
                  <Route path="/cam/*" element={<CamHandoffPage />} />

                  {/* Legal pages */}
                  <Route path="/privacy" element={<PrivacyPolicyPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-of-use" element={<TermsOfUsePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  
                  {/* 404 catch-all */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
