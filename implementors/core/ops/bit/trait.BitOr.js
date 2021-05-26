(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;O, V, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"bitvec/array/struct.BitArray.html\" title=\"struct bitvec::array::BitArray\">BitArray</a>&lt;O, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"bitvec/view/trait.BitView.html\" title=\"trait bitvec::view::BitView\">BitView</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;O, V::<a class=\"type\" href=\"bitvec/view/trait.BitView.html#associatedtype.Store\" title=\"type bitvec::view::BitView::Store\">Store</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;Rhs&gt;,&nbsp;</span>","synthetic":false,"types":["bitvec::array::BitArray"]},{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;R&gt; for <a class=\"struct\" href=\"bitvec/index/struct.BitMask.html\" title=\"struct bitvec::index::BitMask\">BitMask</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::index::BitMask"]},{"text":"impl&lt;O, T, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;O, T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;Rhs&gt;,&nbsp;</span>","synthetic":false,"types":["bitvec::boxed::BitBox"]},{"text":"impl&lt;O, T, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;O, T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOrAssign.html\" title=\"trait core::ops::bit::BitOrAssign\">BitOrAssign</a>&lt;Rhs&gt;,&nbsp;</span>","synthetic":false,"types":["bitvec::vec::BitVec"]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;&amp;'_ <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S&gt;&gt; for &amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["kernel_hal"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"kernel_hal/defs/struct.MMUFlags.html\" title=\"struct kernel_hal::defs::MMUFlags\">MMUFlags</a>&gt; for <a class=\"struct\" href=\"kernel_hal/defs/struct.MMUFlags.html\" title=\"struct kernel_hal::defs::MMUFlags\">MMUFlags</a>","synthetic":false,"types":["kernel_hal::defs::MMUFlags"]}];
implementors["linux_object"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"linux_object/fs/struct.FcntlFlags.html\" title=\"struct linux_object::fs::FcntlFlags\">FcntlFlags</a>&gt; for <a class=\"struct\" href=\"linux_object/fs/struct.FcntlFlags.html\" title=\"struct linux_object::fs::FcntlFlags\">FcntlFlags</a>","synthetic":false,"types":["linux_object::fs::fcntl::FcntlFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"linux_object/fs/struct.FileFlags.html\" title=\"struct linux_object::fs::FileFlags\">FileFlags</a>&gt; for <a class=\"struct\" href=\"linux_object/fs/struct.FileFlags.html\" title=\"struct linux_object::fs::FileFlags\">FileFlags</a>","synthetic":false,"types":["linux_object::fs::fcntl::FileFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"linux_object/signal/struct.SignalActionFlags.html\" title=\"struct linux_object::signal::SignalActionFlags\">SignalActionFlags</a>&gt; for <a class=\"struct\" href=\"linux_object/signal/struct.SignalActionFlags.html\" title=\"struct linux_object::signal::SignalActionFlags\">SignalActionFlags</a>","synthetic":false,"types":["linux_object::signal::action::SignalActionFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"linux_object/signal/struct.SignalStackFlags.html\" title=\"struct linux_object::signal::SignalStackFlags\">SignalStackFlags</a>&gt; for <a class=\"struct\" href=\"linux_object/signal/struct.SignalStackFlags.html\" title=\"struct linux_object::signal::SignalStackFlags\">SignalStackFlags</a>","synthetic":false,"types":["linux_object::signal::SignalStackFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"linux_object/sync/struct.Event.html\" title=\"struct linux_object::sync::Event\">Event</a>&gt; for <a class=\"struct\" href=\"linux_object/sync/struct.Event.html\" title=\"struct linux_object::sync::Event\">Event</a>","synthetic":false,"types":["linux_object::sync::event_bus::Event"]}];
implementors["x86_64"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"x86_64/registers/control/struct.Cr0Flags.html\" title=\"struct x86_64::registers::control::Cr0Flags\">Cr0Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr0Flags.html\" title=\"struct x86_64::registers::control::Cr0Flags\">Cr0Flags</a>","synthetic":false,"types":["x86_64::registers::control::Cr0Flags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"x86_64/registers/control/struct.Cr3Flags.html\" title=\"struct x86_64::registers::control::Cr3Flags\">Cr3Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr3Flags.html\" title=\"struct x86_64::registers::control::Cr3Flags\">Cr3Flags</a>","synthetic":false,"types":["x86_64::registers::control::Cr3Flags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"x86_64/registers/control/struct.Cr4Flags.html\" title=\"struct x86_64::registers::control::Cr4Flags\">Cr4Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/control/struct.Cr4Flags.html\" title=\"struct x86_64::registers::control::Cr4Flags\">Cr4Flags</a>","synthetic":false,"types":["x86_64::registers::control::Cr4Flags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"x86_64/registers/model_specific/struct.EferFlags.html\" title=\"struct x86_64::registers::model_specific::EferFlags\">EferFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/model_specific/struct.EferFlags.html\" title=\"struct x86_64::registers::model_specific::EferFlags\">EferFlags</a>","synthetic":false,"types":["x86_64::registers::model_specific::EferFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"x86_64/registers/rflags/struct.RFlags.html\" title=\"struct x86_64::registers::rflags::RFlags\">RFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/rflags/struct.RFlags.html\" title=\"struct x86_64::registers::rflags::RFlags\">RFlags</a>","synthetic":false,"types":["x86_64::registers::rflags::RFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"x86_64/registers/xcontrol/struct.XCr0Flags.html\" title=\"struct x86_64::registers::xcontrol::XCr0Flags\">XCr0Flags</a>&gt; for <a class=\"struct\" href=\"x86_64/registers/xcontrol/struct.XCr0Flags.html\" title=\"struct x86_64::registers::xcontrol::XCr0Flags\">XCr0Flags</a>","synthetic":false,"types":["x86_64::registers::xcontrol::XCr0Flags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"x86_64/structures/gdt/struct.DescriptorFlags.html\" title=\"struct x86_64::structures::gdt::DescriptorFlags\">DescriptorFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/structures/gdt/struct.DescriptorFlags.html\" title=\"struct x86_64::structures::gdt::DescriptorFlags\">DescriptorFlags</a>","synthetic":false,"types":["x86_64::structures::gdt::DescriptorFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"x86_64/structures/idt/struct.PageFaultErrorCode.html\" title=\"struct x86_64::structures::idt::PageFaultErrorCode\">PageFaultErrorCode</a>&gt; for <a class=\"struct\" href=\"x86_64/structures/idt/struct.PageFaultErrorCode.html\" title=\"struct x86_64::structures::idt::PageFaultErrorCode\">PageFaultErrorCode</a>","synthetic":false,"types":["x86_64::structures::idt::PageFaultErrorCode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"x86_64/structures/paging/page_table/struct.PageTableFlags.html\" title=\"struct x86_64::structures::paging::page_table::PageTableFlags\">PageTableFlags</a>&gt; for <a class=\"struct\" href=\"x86_64/structures/paging/page_table/struct.PageTableFlags.html\" title=\"struct x86_64::structures::paging::page_table::PageTableFlags\">PageTableFlags</a>","synthetic":false,"types":["x86_64::structures::paging::page_table::PageTableFlags"]}];
implementors["zircon_object"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"zircon_object/dev/struct.InterruptFlags.html\" title=\"struct zircon_object::dev::InterruptFlags\">InterruptFlags</a>&gt; for <a class=\"struct\" href=\"zircon_object/dev/struct.InterruptFlags.html\" title=\"struct zircon_object::dev::InterruptFlags\">InterruptFlags</a>","synthetic":false,"types":["zircon_object::dev::interrupt::InterruptFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"zircon_object/dev/struct.InterruptOptions.html\" title=\"struct zircon_object::dev::InterruptOptions\">InterruptOptions</a>&gt; for <a class=\"struct\" href=\"zircon_object/dev/struct.InterruptOptions.html\" title=\"struct zircon_object::dev::InterruptOptions\">InterruptOptions</a>","synthetic":false,"types":["zircon_object::dev::interrupt::InterruptOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"zircon_object/dev/struct.IommuPerms.html\" title=\"struct zircon_object::dev::IommuPerms\">IommuPerms</a>&gt; for <a class=\"struct\" href=\"zircon_object/dev/struct.IommuPerms.html\" title=\"struct zircon_object::dev::IommuPerms\">IommuPerms</a>","synthetic":false,"types":["zircon_object::dev::iommu::IommuPerms"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"zircon_object/dev/struct.ResourceFlags.html\" title=\"struct zircon_object::dev::ResourceFlags\">ResourceFlags</a>&gt; for <a class=\"struct\" href=\"zircon_object/dev/struct.ResourceFlags.html\" title=\"struct zircon_object::dev::ResourceFlags\">ResourceFlags</a>","synthetic":false,"types":["zircon_object::dev::resource::ResourceFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"zircon_object/ipc/struct.SocketFlags.html\" title=\"struct zircon_object::ipc::SocketFlags\">SocketFlags</a>&gt; for <a class=\"struct\" href=\"zircon_object/ipc/struct.SocketFlags.html\" title=\"struct zircon_object::ipc::SocketFlags\">SocketFlags</a>","synthetic":false,"types":["zircon_object::ipc::socket::SocketFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"zircon_object/object/struct.Rights.html\" title=\"struct zircon_object::object::Rights\">Rights</a>&gt; for <a class=\"struct\" href=\"zircon_object/object/struct.Rights.html\" title=\"struct zircon_object::object::Rights\">Rights</a>","synthetic":false,"types":["zircon_object::object::rights::Rights"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"zircon_object/object/struct.Signal.html\" title=\"struct zircon_object::object::Signal\">Signal</a>&gt; for <a class=\"struct\" href=\"zircon_object/object/struct.Signal.html\" title=\"struct zircon_object::object::Signal\">Signal</a>","synthetic":false,"types":["zircon_object::object::signal::Signal"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"zircon_object/signal/struct.PortOptions.html\" title=\"struct zircon_object::signal::PortOptions\">PortOptions</a>&gt; for <a class=\"struct\" href=\"zircon_object/signal/struct.PortOptions.html\" title=\"struct zircon_object::signal::PortOptions\">PortOptions</a>","synthetic":false,"types":["zircon_object::signal::port::PortOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"zircon_object/task/struct.ThreadFlag.html\" title=\"struct zircon_object::task::ThreadFlag\">ThreadFlag</a>&gt; for <a class=\"struct\" href=\"zircon_object/task/struct.ThreadFlag.html\" title=\"struct zircon_object::task::ThreadFlag\">ThreadFlag</a>","synthetic":false,"types":["zircon_object::task::thread::ThreadFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"zircon_object/vm/struct.VmarFlags.html\" title=\"struct zircon_object::vm::VmarFlags\">VmarFlags</a>&gt; for <a class=\"struct\" href=\"zircon_object/vm/struct.VmarFlags.html\" title=\"struct zircon_object::vm::VmarFlags\">VmarFlags</a>","synthetic":false,"types":["zircon_object::vm::vmar::VmarFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"zircon_object/vm/struct.VmoInfoFlags.html\" title=\"struct zircon_object::vm::VmoInfoFlags\">VmoInfoFlags</a>&gt; for <a class=\"struct\" href=\"zircon_object/vm/struct.VmoInfoFlags.html\" title=\"struct zircon_object::vm::VmoInfoFlags\">VmoInfoFlags</a>","synthetic":false,"types":["zircon_object::vm::vmo::VmoInfoFlags"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()