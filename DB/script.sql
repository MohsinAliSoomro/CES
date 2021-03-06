USE [master]
GO
/****** Object:  Database [CES]    Script Date: 11/10/2020 12:41:53 AM ******/
CREATE DATABASE [CES]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CES', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\CES.mdf' , SIZE = 3136KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'CES_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\CES_log.ldf' , SIZE = 832KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [CES] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CES].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CES] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CES] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CES] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CES] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CES] SET ARITHABORT OFF 
GO
ALTER DATABASE [CES] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CES] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [CES] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CES] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CES] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CES] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CES] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CES] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CES] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CES] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CES] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CES] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CES] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CES] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CES] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CES] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CES] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CES] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CES] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [CES] SET  MULTI_USER 
GO
ALTER DATABASE [CES] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CES] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CES] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CES] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [CES]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[C_Id] [int] IDENTITY(1,1) NOT NULL,
	[Semeter] [nvarchar](10) NULL,
	[P_Id] [int] NULL,
 CONSTRAINT [PK_Course] PRIMARY KEY CLUSTERED 
(
	[C_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Department]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[D_Id] [int] IDENTITY(1,1) NOT NULL,
	[D_Name] [nvarchar](100) NULL,
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[D_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Fact_Course_Subject]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Fact_Course_Subject](
	[C_id] [int] NULL,
	[Sub_Id] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Fact_Form_Subject]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Fact_Form_Subject](
	[Sub_id] [int] NULL,
	[F_id] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Fact_Subject_Type]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Fact_Subject_Type](
	[Sub_Id] [int] NULL,
	[SType_Id] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Fact_Teacher_Subject]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Fact_Teacher_Subject](
	[T_id] [int] NULL,
	[Sub_Id] [int] NULL,
	[Type] [nvarchar](50) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Form_Exam]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Form_Exam](
	[F_Id] [int] IDENTITY(1,1) NOT NULL,
	[St_id] [int] NULL,
	[FormType] [int] NULL,
	[Approved] [int] NULL,
 CONSTRAINT [PK_Form_Exam] PRIMARY KEY CLUSTERED 
(
	[F_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Gpa]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Gpa](
	[G_Id] [int] IDENTITY(1,1) NOT NULL,
	[Remarks] [nvarchar](50) NULL,
	[Termback] [nvarchar](50) NULL,
 CONSTRAINT [PK_Gpa] PRIMARY KEY CLUSTERED 
(
	[G_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Marks]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Marks](
	[St_id] [int] NULL,
	[T_id] [int] NULL,
	[Sub_id] [int] NULL,
	[Marks] [int] NULL,
	[G_id] [int] NULL,
	[Session] [date] NULL,
	[GenerateBy] [int] NULL,
	[GenerateDate] [date] NULL,
	[Type] [nvarchar](50) NULL,
	[M_ID] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Programmes]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Programmes](
	[P_Id] [int] IDENTITY(1,1) NOT NULL,
	[P_Name] [nvarchar](30) NULL,
	[D_Id] [int] NULL,
 CONSTRAINT [PK_Programmes] PRIMARY KEY CLUSTERED 
(
	[P_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ProgrammeType]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProgrammeType](
	[P_Id] [int] NULL,
	[P_type] [nvarchar](50) NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Student]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Student](
	[St_id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](20) NULL,
	[LastName] [nvarchar](20) NULL,
	[Caste] [nvarchar](20) NULL,
	[Email] [nvarchar](30) NULL,
	[Cell] [nvarchar](11) NULL,
	[Address] [nvarchar](150) NULL,
	[FatherName] [nvarchar](40) NULL,
	[CNIC] [nvarchar](13) NULL,
	[Domicile] [nvarchar](30) NULL,
	[Religion] [nvarchar](15) NULL,
	[Nationality] [nvarchar](20) NULL,
	[P_id] [int] NULL,
 CONSTRAINT [PK_Student] PRIMARY KEY CLUSTERED 
(
	[St_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Subject_Type]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Subject_Type](
	[SType_Id] [int] IDENTITY(1,1) NOT NULL,
	[Sub_Type] [nvarchar](15) NULL,
 CONSTRAINT [PK_Subject_Type] PRIMARY KEY CLUSTERED 
(
	[SType_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Subjects]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Subjects](
	[Sub_Id] [int] IDENTITY(1,1) NOT NULL,
	[Sub_Name] [nvarchar](50) NULL,
	[CourseNo] [nvarchar](10) NULL,
 CONSTRAINT [PK_Subject] PRIMARY KEY CLUSTERED 
(
	[Sub_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Submit_Teacher_Result_Temp]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Submit_Teacher_Result_Temp](
	[T_ID] [int] NULL,
	[Sub_Id] [int] NULL,
	[Marks] [int] NULL,
	[St_id] [int] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Teacher]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Teacher](
	[T_id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](20) NULL,
	[LastName] [nvarchar](20) NULL,
	[Caste] [nvarchar](20) NULL,
	[Email] [nvarchar](50) NULL,
	[Cell] [nvarchar](11) NULL,
	[DOB] [date] NULL,
	[DOJ] [date] NULL,
	[LastQualification] [nvarchar](50) NULL,
	[DOR] [date] NULL,
	[D_Id] [int] NULL,
 CONSTRAINT [PK_Teacher] PRIMARY KEY CLUSTERED 
(
	[T_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 11/10/2020 12:41:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[U_id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
	[Full Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[U_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD  CONSTRAINT [FK_Course_Programmes] FOREIGN KEY([P_Id])
REFERENCES [dbo].[Programmes] ([P_Id])
GO
ALTER TABLE [dbo].[Course] CHECK CONSTRAINT [FK_Course_Programmes]
GO
ALTER TABLE [dbo].[Fact_Course_Subject]  WITH CHECK ADD  CONSTRAINT [FK_Fact_Course_Subject_Course] FOREIGN KEY([C_id])
REFERENCES [dbo].[Course] ([C_Id])
GO
ALTER TABLE [dbo].[Fact_Course_Subject] CHECK CONSTRAINT [FK_Fact_Course_Subject_Course]
GO
ALTER TABLE [dbo].[Fact_Course_Subject]  WITH CHECK ADD  CONSTRAINT [FK_Fact_Course_Subject_Subject] FOREIGN KEY([Sub_Id])
REFERENCES [dbo].[Subjects] ([Sub_Id])
GO
ALTER TABLE [dbo].[Fact_Course_Subject] CHECK CONSTRAINT [FK_Fact_Course_Subject_Subject]
GO
ALTER TABLE [dbo].[Fact_Form_Subject]  WITH CHECK ADD  CONSTRAINT [FK_Fact_Form_Subject_Subjects] FOREIGN KEY([F_id])
REFERENCES [dbo].[Form_Exam] ([F_Id])
GO
ALTER TABLE [dbo].[Fact_Form_Subject] CHECK CONSTRAINT [FK_Fact_Form_Subject_Subjects]
GO
ALTER TABLE [dbo].[Fact_Subject_Type]  WITH CHECK ADD  CONSTRAINT [FK_Fact_Subject_Type_Subject_Type] FOREIGN KEY([SType_Id])
REFERENCES [dbo].[Subject_Type] ([SType_Id])
GO
ALTER TABLE [dbo].[Fact_Subject_Type] CHECK CONSTRAINT [FK_Fact_Subject_Type_Subject_Type]
GO
ALTER TABLE [dbo].[Fact_Subject_Type]  WITH CHECK ADD  CONSTRAINT [FK_Fact_Subject_Type_Subjects] FOREIGN KEY([Sub_Id])
REFERENCES [dbo].[Subjects] ([Sub_Id])
GO
ALTER TABLE [dbo].[Fact_Subject_Type] CHECK CONSTRAINT [FK_Fact_Subject_Type_Subjects]
GO
ALTER TABLE [dbo].[Fact_Teacher_Subject]  WITH CHECK ADD  CONSTRAINT [FK_Fact_Teacher_Subject_Subjects] FOREIGN KEY([Sub_Id])
REFERENCES [dbo].[Subjects] ([Sub_Id])
GO
ALTER TABLE [dbo].[Fact_Teacher_Subject] CHECK CONSTRAINT [FK_Fact_Teacher_Subject_Subjects]
GO
ALTER TABLE [dbo].[Fact_Teacher_Subject]  WITH CHECK ADD  CONSTRAINT [FK_Fact_Teacher_Subject_Teacher] FOREIGN KEY([T_id])
REFERENCES [dbo].[Teacher] ([T_id])
GO
ALTER TABLE [dbo].[Fact_Teacher_Subject] CHECK CONSTRAINT [FK_Fact_Teacher_Subject_Teacher]
GO
ALTER TABLE [dbo].[Form_Exam]  WITH CHECK ADD  CONSTRAINT [FK_Form_Exam_Student] FOREIGN KEY([St_id])
REFERENCES [dbo].[Student] ([St_id])
GO
ALTER TABLE [dbo].[Form_Exam] CHECK CONSTRAINT [FK_Form_Exam_Student]
GO
ALTER TABLE [dbo].[Marks]  WITH CHECK ADD  CONSTRAINT [FK_Marks_Subjects] FOREIGN KEY([G_id])
REFERENCES [dbo].[Gpa] ([G_Id])
GO
ALTER TABLE [dbo].[Marks] CHECK CONSTRAINT [FK_Marks_Subjects]
GO
ALTER TABLE [dbo].[Programmes]  WITH CHECK ADD  CONSTRAINT [FK_Programmes_Department] FOREIGN KEY([D_Id])
REFERENCES [dbo].[Department] ([D_Id])
GO
ALTER TABLE [dbo].[Programmes] CHECK CONSTRAINT [FK_Programmes_Department]
GO
ALTER TABLE [dbo].[ProgrammeType]  WITH CHECK ADD  CONSTRAINT [FK_ProgrammeType_Programmes] FOREIGN KEY([P_Id])
REFERENCES [dbo].[Programmes] ([P_Id])
GO
ALTER TABLE [dbo].[ProgrammeType] CHECK CONSTRAINT [FK_ProgrammeType_Programmes]
GO
ALTER TABLE [dbo].[Student]  WITH CHECK ADD  CONSTRAINT [FK_Student_Programmes] FOREIGN KEY([P_id])
REFERENCES [dbo].[Programmes] ([P_Id])
GO
ALTER TABLE [dbo].[Student] CHECK CONSTRAINT [FK_Student_Programmes]
GO
ALTER TABLE [dbo].[Teacher]  WITH CHECK ADD  CONSTRAINT [FK_Teacher_Department] FOREIGN KEY([D_Id])
REFERENCES [dbo].[Department] ([D_Id])
GO
ALTER TABLE [dbo].[Teacher] CHECK CONSTRAINT [FK_Teacher_Department]
GO
USE [master]
GO
ALTER DATABASE [CES] SET  READ_WRITE 
GO
